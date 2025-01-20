"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import defaultProfilePic from "@/public/image/default-user.jpg";
import Spinner from "@/app/_components/ui/Spinner";
import toast from "react-hot-toast";
import {useDebouncer} from "@/lib/useDebouncer";
import {useDeleteUserMutation, useFetchUsersQuery, useSearchUsersQuery, useUpdateUserMutation} from "@/app/_features/appSlices/adminSlice";
import ConfirmDelete from "@/app/_components/ui/ConfirmDelete";
import Modal from "@/app/_components/ui/Modal";

const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

const AccountSearch = () => {
   const [searchTerm, setSearchTerm] = useState<string>("");
   const [filterType, setFilterType] = useState<string>("All");

   const {data: usersResponse, isLoading, error} = useFetchUsersQuery({});

   // Extract users from the response (assuming `data` holds the list of users)
   const users = usersResponse?.data || [];

   // Handle search
   const {data: searchResults, isLoading: isSearching} = useSearchUsersQuery(searchTerm);
   const search = searchResults?.data || [];

   const [deleteUser, {isLoading: isDeletingUser}] = useDeleteUserMutation();
   const [updateUser, {isLoading: isEditingUser}] = useUpdateUserMutation();

   const debouncedSearch = useDebouncer(searchTerm, 500); // Debounced search term

   const displayedUsers = search?.length > 0 ? search : users;

   const [isModalOpen, setIsModalOpen] = useState(false);
   const [userState, setUserState] = useState<any>({
      id: "",
      email: "",
      firstName: "",
      lastName: "",
      goals: "",
      phoneNumber: "",
      interests: [],
   });

   // Trigger search when debounced value changes
   useEffect(() => {
      if (debouncedSearch) {
         setSearchTerm(debouncedSearch); // Manually trigger the search
      }
   }, [debouncedSearch]);

   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
   };

   const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFilterType(e.target.value);
   };

   const handleEdit = (user: any) => {
      setUserState(user);
      setIsModalOpen(true); // Open the modal
   };

   const handleCloseModal = () => {
      setIsModalOpen(false); // Close the modal
   };

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserState({...userState, [e.target.name]: e.target.value});
   };

   const handleSaveChanges = async (id: any, userState: any) => {
      try {
         updateUser({userId: id, formData: userState}).unwrap;
         toast.success(`User  updated successfully`); // Success message in console

         setIsModalOpen(false); // Close the modal
      } catch (error) {
         console.error("Error updating user:", error);
      }
   };

   const handleDeleteUser = async (userId: string) => {
      try {
         await deleteUser(userId).unwrap(); // Calling delete mutation

         toast.success(`User with ID ${userId} deleted successfully`); // Success message in console
      } catch (error: any) {
         console.error("Error deleting user:", error);
         toast.error(error?.message || "Error deleting user:", error);
      }
   };

   if (isLoading && !users) {
      return <Spinner />;
   }

   return (
      <div className="container flex flex-col mx-auto md:p-6">
         {/* Search box and filter dropdown */}
         <div className="flex w-full gap-3 justify-between items-center mb-4">
            <input
               type="text"
               className="w-full max-w-lg p-2 border border-gray-300 rounded-md"
               placeholder="Search for an account..."
               value={searchTerm}
               onChange={handleSearchChange}
            />

            <select value={filterType} onChange={handleFilterChange} className="w-fit p-2 px-2 border cursor-pointer border-gray-300 rounded-md bg-yellow-500 text-black">
               <option value="All">All</option>
               <option value="Vendor">Vendor</option>
               <option value="Employer">Employer</option>
               <option value="Student">Student</option>
            </select>
         </div>

         {/* Accounts list */}
         <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
            {displayedUsers && displayedUsers?.length > 0 ? (
               displayedUsers.map((account: any) => (
                  <div key={account.id} className="w-full sm:w-full lg:w-full shadow-md border-yellow-500 border-[2px] flex justify-center flex-col gap-5 bg-white p-10 rounded-lg">
                     <div className="flex relative flex-col items-center mb-4">
                        <div className="w-24 h-24 border border-yellow-600 rounded-full bg-slate-400 flex items-center justify-center overflow-hidden">
                           <Image
                              src={account?.image ? `${IMAGE_URL}/${account.image}` : defaultProfilePic}
                              alt="image"
                              width={500}
                              height={500}
                              className="w-full h-full object-fill object-center "
                           />
                        </div>
                        <div>
                           <h2 className="text-[1.3em] mt-2 font-bold">{`${account.firstName} ${account.lastName}`}</h2>
                           <h3 className="text-[1em] text-center font-medium">{`${account.email}`}</h3>

                           <p className="text-bold text-xl">
                              Interests:
                              <ul className="list-disc ml-4">
                                 {account?.interests?.map((interest: string, index: number) => (
                                    <li className="text-lightgray text-[0.6em]" key={index}>
                                       {interest}
                                    </li>
                                 ))}
                              </ul>
                           </p>
                        </div>
                     </div>

                     {/* Buttons */}
                     <div className="flex items-center gap-2 flex-1 justify-between">
                        {/* <button
									className="bg-red-500 w-1/2 p-2 text-white rounded-sm"
									onClick={() => handleDeleteUser(account?.id)}
								>
									Delete
								</button> */}
                        <Modal>
                           <Modal.Open opens="delete">
                              <button className="bg-red-500 w-1/2 p-2  text-white rounded-sm">Delete</button>
                           </Modal.Open>
                           <Modal.Window name="delete">
                              <ConfirmDelete resourceName="user" disabled={isDeletingUser} onConfirm={() => handleDeleteUser(account?.id)} />
                           </Modal.Window>
                        </Modal>
                        <button className="bg-blue-500 p-2 text-white w-1/2 rounded-sm" onClick={() => handleEdit(account)}>
                           Edit
                        </button>
                     </div>
                  </div>
               ))
            ) : (
               <p>No account found</p>
            )}
         </div>

         {/* Modal */}
         {isModalOpen && userState && (
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
               <div className="bg-white z- p-6 rounded-md w-[80%] h-[90%]">
                  <h2 className="text-xl font-bold mb-4">Edit User {userState.id}</h2>
                  <form className="space-y-4">
                     <div>
                        <label className="block font-bold">First Name:</label>
                        <input type="text" name="firstName" value={userState.firstName} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md" />
                     </div>
                     <div>
                        <label className="block font-bold">Last Name:</label>
                        <input type="text" name="lastName" value={userState.lastName} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md" />
                     </div>
                     <div>
                        <label className="block font-bold">Email:</label>
                        <input type="email" name="email" value={userState.email} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md" />
                     </div>
                     <div>
                        <label className="block font-bold">Phone Number:</label>
                        <input type="text" name="phoneNumber" value={userState.phoneNumber} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded-md" />
                     </div>

                     <div>
                        <label className="block font-bold">Interests:</label>
                        <input
                           type="text"
                           name="interests"
                           value={userState.interests.join(", ")}
                           onChange={(e) =>
                              setUserState({
                                 ...userState,
                                 interests: e.target.value.split(",").map((s) => s.trim()),
                              })
                           }
                           className="w-full p-2 border border-gray-300 rounded-md"
                        />
                     </div>

                     <div className="flex justify-end gap-4">
                        <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handleCloseModal}>
                           Cancel
                        </button>
                        <div className="flex justify-end">
                           <button
                              type="button"
                              disabled={isLoading}
                              className={`bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                              onClick={() => handleSaveChanges(userState.id, userState)}
                           >
                              Save Changes
                              {isLoading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" role="status"></div>}
                           </button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         )}
      </div>
   );
};

export default AccountSearch;

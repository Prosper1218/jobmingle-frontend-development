import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
	reducerPath: "adminApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.jobmingle.co/public/api",
		prepareHeaders: (headers) => {
			const token = localStorage.getItem("access_token");
			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	tagTypes: ["Users", "User", "SearchedUsers", "Jobs", "Analytics"],

	endpoints: (builder) => ({
		// Fetch all users
		fetchUsers: builder.query({
			query: () => "/admin/getusers",
			providesTags: ["Users"],
		}),

		// Fetch user by ID
		fetchUserById: builder.query({
			query: (userId) => `/admin/getuser/${userId}`,
			providesTags: (id) => [{ type: "User", id }],
		}),

		// Delete a user
		deleteUser: builder.mutation({
			query: (userId) => ({
				url: `/admin/deleteuser/${userId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Users", "SearchedUsers"],
			async onQueryStarted(userId, { dispatch, queryFulfilled }) {
				const filteredResult = dispatch(
					adminApi.util.updateQueryData("fetchUsers", {}, (oldUsers) => {
						const filteredData = oldUsers?.data?.filter(
							(user: any) => user?.id !== userId
						);
						return { ...oldUsers, data: filteredData };
					})
				);
				try {
					await queryFulfilled;
				} catch {
					filteredResult.undo();
				}
			},
		}),

		// Update a user
		updateUser: builder.mutation({
			query: ({ userId, formData }) => ({
				url: `/admin/updateuser/${userId}`,
				method: "PUT",
				body: formData,
			}),
			invalidatesTags: ({ userId }) => [{ type: "User", id: userId }],
		}),

		// Search users
		searchUsers: builder.query({
			query: (query) => ({
				url: `/admin/searchusers`,
				params: { search: query },
			}),
			providesTags: ["SearchedUsers"],
		}),
		getAllJobs: builder.query({
			query: () => ({
				url: "/jobs/getAllJobs",
			}),
			providesTags: ["Jobs"],
		}),

		updateJobStatus: builder.mutation({
			query: ({ jobId, status }) => ({
				url: `/jobs/${jobId}/jobstatus`,
				method: "PATCH",
				body: { status },
			}),
			invalidatesTags: ["Jobs"],
		}),

		// Fetch analytics
		fetchAnalytics: builder.query({
			query: () => "/admin/analytics",
			providesTags: ["Analytics"],
		}),
	}),
});
export const {
	useFetchUsersQuery,
	useFetchUserByIdQuery,
	useDeleteUserMutation,
	useUpdateUserMutation,
	useSearchUsersQuery,
	useGetAllJobsQuery,
	useUpdateJobStatusMutation,
	useFetchAnalyticsQuery,
} = adminApi;

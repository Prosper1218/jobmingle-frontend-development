import React from "react";
import Button from "./Button";
import Spinner from "./Spinner";

interface ConfirmDeleteProps {
	resourceName?: string;
	onConfirm?: () => void;
	onCloseModal?: () => void;
	disabled?: boolean;
}

const ConfirmDelete: React.FC<ConfirmDeleteProps> = ({
	resourceName,
	onConfirm,
	onCloseModal,
	disabled = false,
}) => {
	return (
		<div className="w-[250px] sm:w-96 flex flex-col gap-3">
			<h3 className="font-bold text-md">Delete {resourceName}</h3>
			<p className="text-gray-500 mb-3">
				Are you sure you want to delete this {resourceName} permanently? This
				action cannot be undone.
			</p>

			<div className="flex justify-end gap-3  ">
				<Button type="secondary" disabled={disabled} onClick={onCloseModal}>
					Cancel
				</Button>
				<Button type="danger" disabled={disabled} onClick={onConfirm}>
					{disabled ? "Deleting..." : "Delete"}
				</Button>
			</div>
		</div>
	);
};

export default ConfirmDelete;

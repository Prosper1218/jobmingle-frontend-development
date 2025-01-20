import React, {
	cloneElement,
	createContext,
	useContext,
	useState,
	ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutsideClick } from "@/app/_hooks/useOutsideClick";

interface ModalContextProps {
	openName: string;
	close: () => void;
	open: (name: string) => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

function useModal() {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error("useModal must be used within a ModalProvider");
	}
	return context;
}

interface ModalProps {
	children: ReactNode;
}

function Modal({ children }: ModalProps) {
	const [openName, setOpenName] = useState("");

	const close = () => setOpenName("");
	const open = setOpenName;

	return (
		<ModalContext.Provider value={{ openName, close, open }}>
			{children}
		</ModalContext.Provider>
	);
}

interface OpenProps {
	children: React.ReactElement;
	opens: string;
}

function Open({ children, opens: opensWindowName }: OpenProps) {
	const { open } = useModal();

	return cloneElement(children, { onClick: () => open(opensWindowName) });
}

interface WindowProps {
	children: React.ReactElement;
	name: string;
}

function Window({ children, name }: WindowProps) {
	const { openName, close } = useModal();
	const ref = useOutsideClick(close);

	if (name !== openName) return null;

	return createPortal(
		<div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50">
			<div
				className="fixed top-1/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-4 md:p-8 transition-all duration-500"
				ref={ref}
			>
				<button
					onClick={close}
					className="absolute top-3 right-3 bg-transparent hover:bg-gray-100 p-2 rounded transition-all"
				>
					<HiXMark className="w-6 h-6 text-gray-500" />
				</button>
				<div>{cloneElement(children, { onCloseModal: close })}</div>
			</div>
		</div>,
		document.body
	);
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;

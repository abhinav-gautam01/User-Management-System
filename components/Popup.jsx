import { Button } from "./Button"

export const Popup = ({ label, onClose,onClick }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-xs bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <p className="text-lg font-semibold">{`Are you sure you want to ${label}?`}</p>
                <div className="mt-4 flex justify-center gap-4">
                    <Button label="YES" onClick={onClick} />
                    <Button label="NO" onClick={onClose} />
                </div>
            </div>
        </div>
    );
};

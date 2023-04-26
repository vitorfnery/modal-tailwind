import { useState } from "react";
import Modal from "./components/Modal";
import { Trash } from "@phosphor-icons/react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <main className="App">
      <button className="btn btn-danger" onClick={() => setOpen(true)}>
        <Trash /> Delete
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Trash size={56} className="mx-auto text-red-500" />
        <div className="mx-auto my-4 w-48 flex flex-col items-center justify-center">
          <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
          <p className="text-sm text-gray-500">
            Are you sure you want to delete this item?
          </p>
        </div>
        <div className="flex gap-4">
          <button className="btn btn-danger w-full">Delete</button>
          <button
            className="btn btn-light w-full"
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </main>
  );
}

export default App;

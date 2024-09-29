"use client";
import React from "react";
import { Modal, ModalBody, ModalTrigger } from "../ui/animated-modal";
import InsideModal from "./InsideModal";
import { useRouter } from 'next/navigation';

export function AnimatedModalDemo() {
  const router = useRouter();

  const handleUserTypeSelection = (type: string) => {
    if (type === 'Developer') {
      router.push('/devprofile');
    } else if (type === 'Investor') {
      router.push('/investorprofile');
    }
  };

  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-gray-800 dark:bg-white text-white font-semibold flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center px-3 transition duration-500">Vestin</span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ✈️
          </div>
        </ModalTrigger>
        <ModalBody className="h-[40vh] w-[40%] flex justify-center">
          <InsideModal onSelectUserType={handleUserTypeSelection} />
        </ModalBody>
      </Modal>
    </div>
  );
}
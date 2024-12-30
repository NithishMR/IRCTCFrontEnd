"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MoveRight, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="px-6 Abel relative">
        {/* Desktop View */}
        <div className=" hidden lg:flex md:hidden sm:hidden flex-row items-center justify-between py-6">
          <div className="flex flex-row items-center space-x-5 font-medium text-sm">
            <div className="cursor-pointer">
              <img src="./IRCTCLOGO.png" alt="irctc logo" className="w-14" />
            </div>
            <div className="cursor-pointer text-blue-900">Home</div>
            <div className="cursor-pointer">Explore</div>
            <div className="cursor-pointer">Contact Us</div>
            <div className="cursor-pointer">PNR Status</div>
            <div className="cursor-pointer">Promotions</div>
            <div className="cursor-pointer">Exclusive</div>
            <div className="cursor-pointer">IRCTC-E-Wallet</div>
            <div className="cursor-pointer">More</div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <Button className="px-8 py-4">
              Sign In <MoveRight />
            </Button>
            <Button className="px-8 py-4">
              Sign Up <MoveRight />
            </Button>
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex lg:hidden md:flex sm:flex flex-row items-center justify-between py-6">
          <div className="cursor-pointer">
            <img src="./IRCTCLOGO.png" alt="irctc logo" className="w-14" />
          </div>
          <div className="cursor-pointer" onClick={toggleMenu}>
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </div>
        </div>

        {/* Overlay Menu */}
        {isMenuOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 text-white z-50 flex flex-col items-center justify-center transition-all duration-500"
            onClick={toggleMenu}
          >
            <div className="space-y-6 text-center text-2xl">
              <div className="cursor-pointer">Home</div>
              <div className="cursor-pointer">Explore</div>
              <div className="cursor-pointer">Contact Us</div>
              <div className="cursor-pointer">PNR Status</div>
              <div className="cursor-pointer">Promotions</div>
              <div className="cursor-pointer">Exclusive</div>
              <div className="cursor-pointer">IRCTC-E-Wallet</div>
              <div className="cursor-pointer">More</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

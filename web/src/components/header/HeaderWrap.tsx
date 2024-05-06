"use client";
import { useState } from "react";
import Header from "@/components/header/Header";
import Aside from "@/components/categories/Aside";

export default function HeaderWrap(){
    const [isAsideOpen, setIsAsideOpen] = useState(false);
    return (
      <>
        <Header isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen} />
        <Aside  isAsideOpen={isAsideOpen}/>
      </>
    );
}
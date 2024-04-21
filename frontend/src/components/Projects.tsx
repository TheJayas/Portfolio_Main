import {useState} from "react";
import {  motion } from "framer-motion";
import { HomeIcon, Menu, Phone, ShoppingBagIcon, User2 } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export const Projects = () => {
  const navigate=useNavigate();
  const [showDiv,setShowDiv]=useState(false);
  return (
    <div>Projects</div>
  )
}

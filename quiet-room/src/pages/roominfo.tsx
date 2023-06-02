import MechButton from "@/components/MechButton";
import styles from '@/styles/RoomInfo.module.css'
import { Col, Container, Row, Stack } from "react-bootstrap";

import React, { useEffect, useState } from "react";
import axios from "axios";
import GetRoomInfo from "./api/getRoomInfo";
import NavbarObj from "@/components/NavbarObj";



export default function RoomInfo() {

  return (
    <>
      <GetRoomInfo></GetRoomInfo>
    </>
  );
}
  
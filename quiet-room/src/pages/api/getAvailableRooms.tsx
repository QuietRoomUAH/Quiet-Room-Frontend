import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import buildingsList from './buildings.json';
import { Box, Divider, InputLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Select } from "@mui/material";
import { Input } from '@mui/material';
import InfoModal from "@/components/InfoModal";
import Link from "next/link";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { uuid } from "uuidv4";


// URL for API Request: Get Available Rooms
function getURL(building: string, day: string, startTime: string, endTime: string) {
    return `https://uah.quietroom.app/availability/${building}?day=${day}&startTime=${startTime}&endTime=${endTime}`;
}

// Parse time input value for API Request format
// XX:XX -> XXXX
function getTime(rawTime: string) {
    let hour = rawTime.substring(0,2);
    let min = rawTime.substring(3,5);
    return hour.toString() + min.toString();
}

const columns: GridColDef[] = [
    { field: 'Building', headerName: 'Building', width: 130 },
    { field: 'RoomNumber', headerName: 'Room Number', width: 200 }
];



interface AvailableRoomsInt {
    Building: string;
    RoomNumber: string;
    id: string;
}

export default function getAvailableRooms() {

    // Toggle submit
    const [toggle, setToggle] = useState(false);

    const [rooms, setRooms] = useState<any[]>([]);                     // Rooms list
    
    const [day, setDay] = useState('M')                         // Day selection
    //const [building, setBuilding] = useState('');               // Building selection
    const [startTime, setStartTime] = useState('1100');         // Start time
    const [endTime, setEndTime] = useState('1300');             // End time

    const handleSubmit = (e: any) => {

        setRooms([]);       // Empty the array for new data

        buildingsList.map((buildingID: string) => {
            axios
            .get(getURL(buildingID, day, startTime, endTime))
            .then((response) => {
                
                console.log(getURL(buildingID, day, startTime, endTime));
                let readRooms = response?.data;

                // If empty, log to console and skip adding to array
                if (readRooms.length == 0) {
                    console.log("AYO THIS IS EMPTY: " + buildingID)
                }
                // Add rooms to setRooms
                else {
                    readRooms.forEach((room: any) => {
                        setRooms(rooms => [...rooms,
                            {
                                Building: buildingID,
                                RoomNumber: room,
                                id: uuid()
                            }
                        ])
                    })
                }

            })
            .catch((error) => {
                if(error == '400')
                    console.log('THIS WAS A 400');
                console.log(error);
            });
        })
    }


    // Set building code
    const handleBuilding = (e: any) => {
        //setBuilding(e.target.value);
        console.log(e.target.value);
    }

    // Set day option
    const handleDay = (e: any) => {
        setDay(e.target.value);
        console.log(e.target.value);
    }

    // Set start time
    const handleStartTime = (e: any) => {
        let parsedTime = getTime(e.target.value);
        setStartTime(parsedTime);
        console.log(parsedTime);
    }

    // Set end time
    const handleEndTime = (e: any) => {
        let parsedTime = getTime(e.target.value);
        setEndTime(parsedTime);
        console.log(parsedTime);
    }


    // LOADING CONDITION
    if (rooms === undefined) {
        return <>Still loading...</>;
    }


    return (
        <>
            <br></br>
            <Select
                labelId="weekday-select-label"
                id="weekday-select"
                label="Age"
                defaultValue={''}
                onChange={handleDay}
                style={{width: "200px"}}
            >
                <MenuItem value={'M'} selected>Monday</MenuItem>
                <MenuItem value={'T'}>Tuesday</MenuItem>
                <MenuItem value={'W'}>Wednesday</MenuItem>
                <MenuItem value={'R'}>Thursday</MenuItem>
                <MenuItem value={'F'}>Friday</MenuItem>
            </Select>
            <br></br>
            <button onClick={handleSubmit}>Submit</button>
            <hr></hr>
            
            <Input type="time" onChange={handleStartTime}
                defaultValue={'10:00'}
                style={{colorScheme: 'light'}}
            ></Input>
            <Input type="time" onChange={handleEndTime}
                defaultValue={'12:00'}
                style={{colorScheme: 'light'}}
            ></Input>
            <hr></hr>

            <hr></hr>

            <InfoModal></InfoModal>

            <hr></hr>

            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rooms!}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: {
                        pageSize: 10,
                        },
                    },
                    }}
                    pageSizeOptions={[10]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>


        </>
    );
}


















/**

const columns: GridColDef[] = [
    { field: 'Name', headerName: 'Name', width: 130 },
    { field: 'DaysMet', headerName: 'Days', width: 200 },
    { field: 'StartTime', headerName: 'Start Time', width: 130 },
    { field: 'EndTime', headerName: 'End Time', width: 130 },
    { field: 'StartDate', headerName: 'Start Date', width: 130 },
    { field: 'EndDate', headerName: 'End Date', width: 130 }
];

function convertTime(timeVal: string) {
    let hour = parseInt(timeVal.substring(0,2));
    let min = timeVal.substring(2, 4);
    let opt = 'AM'

    if (hour > 12) { hour -= 12; opt = 'PM' };
    if (hour == 0) { hour = 12 };

    return hour.toString() + ':' + min + ' ' + opt;
}

function parseDate(dateVal: string) {
    let year = parseInt(dateVal.substring(0,4));
    let month = parseInt(dateVal.substring(5,7));
    let day = parseInt(dateVal.substring(8,10));

    return month.toString() + '/' + day.toString() + '/' + year.toString();
}

function isValidDate(dateVal: string) {
    let year = parseInt(dateVal.substring(0,4));
    let month = parseInt(dateVal.substring(5,7));
    let day = parseInt(dateVal.substring(8,10));
    
    // Remove old years
    let today = new Date().getFullYear();
    if (year < today) { return false };

    // Remove old months within current year
    // Condition: dateVal is "EndDate"
    today = new Date().getMonth();
    if (month < today) { return false };

    // Else, return true
    return true;
}




const handleText = (e: any) => {
        if (e.key == 'Enter')
            setNum(e.target.value);
    }



    // LOADING CONDITION
    if (events === undefined) {
        return <>Still loading...</>;
    }






<p>{JSON.stringify(room?.RoomNumber)}</p>
            <TextField id="outlined-basic" label="Room Number" variant="outlined" onKeyPress={handleText} />
            <hr></hr>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={events!}
                    getRowId={(row) => row.EventID}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                            pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                />
            </Box>
            <hr></hr>






 */
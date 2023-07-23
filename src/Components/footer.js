import React from "react";
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';
const year=new Date();
const currentyear=year.getFullYear();


export default function footer(){
    return(
        <footer className="footer" >
            <div>
            <CopyrightRoundedIcon fontSize="very-small"/>
            <span >Copyrighted @ {currentyear}</span>
            <p> <a href="\home">Home</a></p>
            <p> <a href="\about">About</a></p>
            </div>
            <div>
            <h3>Contact :</h3>
            <p>Students, </p>
            <p>Dist,</p>
            <p>Anna University.</p>
            <p>Dhanushkumar Sankar -9025635359</p>
            <p>AnnaNagar Athiyan - 1234567890</p>
            <p>Shashi S B - 0987654321</p>
            </div>
        </footer>
    );
}
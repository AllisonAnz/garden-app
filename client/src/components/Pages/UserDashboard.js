import React from 'react'
//import { Container, Row, Col } from "react-bootstrap"
//import { Card, Form, Button } from "react-bootstrap";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { useEffect, useState } from "react";
import { useState } from "react";



export default function UserDashboard() {
    const [active, setActive] = useState(true);
    const [hidden, setHidden] = useState(true);
    const [boo, setBoo] = useState(true);

    
    return (
        <>

        <div>
            <button onClick={() => setHidden(!hidden)}>HIDE</button>
            <div hidden={hidden}>hidden component</div>
        </div>
            <div>
                <button onClick={() => setActive(!active)}>HIDE</button>
                <div hidden={active}>hidden component</div>
            </div>
            <div>
                <button onClick={() => setBoo(!boo)}>HIDE</button>
                <div hidden={boo}>hidden component</div>
            </div>

            
      </>
  );
}



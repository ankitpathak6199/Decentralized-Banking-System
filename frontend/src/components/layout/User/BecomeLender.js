import React, {useState} from 'react'
//import DataTable from '../DataTable'
import Navbar from '../Navbar';
//import { columns } from './TransactionList';
import { UserNavbar } from './UserNavbar';

function BecomeLender() {
    const [ipm, setIpm] = useState(0);
    const [iipm, setIipm] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
	};

    return (
        <div style={{display:"flex", flexDirection:"row"}}>
            <Navbar titles={UserNavbar}></Navbar>
            <div style={{ width: "50%", margin: "0 auto" }}>
                <h1 style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						margin: "25px 0px",
						padding: "0px 0px 25px",
                }}>Become Lender</h1>
                <form className='form' onSubmit={handleSubmit}>
                    <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "25px 0px",
                            padding: "0px 0px 25px",
                        }}>
                        <label style={{paddingRight: "25px"}}>Interest Per Month:</label>
                        <input type='text' value={ipm} onChange={(event) => setIpm(event.target.value)}/>
                    </div>
                    <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "25px 0px",
                            padding: "0px 0px 25px",
                        }}>
                        <label style={{paddingRight: "25px"}}>Additional Interest Per Month:</label>
                        <input type='text' value={iipm} onChange={(event) => setIipm(event.target.value)}/>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "25px 0px",
                            padding: "0px 0px 25px",
                        }}
                    >
                        <input type='submit' className='btn btn-primary' value='Submit' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BecomeLender

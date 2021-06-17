import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));

// types of meeting room
const rooms = [
    {
      value: 'Trainig Room',
      label: 'Training Room',
    },
    {
      value: 'Conference Room',
      label: 'Conference Room',
    }
];


const MeetingRoom = () => {
    const classes = useStyles();
    const [meeting, setMeeting] = React.useState('');
    const [name,setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [calDate, setCalDate] = React.useState(new Date())

    const onChange = (calDate) => {
        setCalDate(calDate)
        //console.log(calDate);
    }
      
    return(
        <div style={{width:"100%", marginTop:"10px"}}>
            <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <header style={{fontSize:"20px"}}>Meeting Room Booking</header>
            </div>

            <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center", margin:"12px"}}>
                <form className={classes.root} noValidate autoComplete="off">
    
                    <div>
                        <TextField
                        select
                        label="Meeting Room"
                        value={meeting}
                        onChange={(e) => setMeeting(e.target.value)}
                        SelectProps={{
                            native: true,
                        }}
                        variant="outlined"
                        
                        >
                        {rooms.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </TextField>
                    </div>
                    
                    <div>
                        <TextField
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        variant="outlined"
                        />
                    </div>
                    
                    <div>
                        <TextField
                        label="Meeting Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        variant="outlined"
                        />
                    </div>

                </form>
            </div>
            
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center"}}>
                <div style={{width:"20%", margin:"4px"}}>
                    <Calendar onChange={onChange} value={calDate} className="result-calendar"/>
                    <div style={{textAlign:"center", margin:"4px"}}>{calDate.toDateString()}</div>
                </div>     
            </div>

            <div>
                <p style={{fontWeight:"bold",display:"flex", 
                alignItems:"center", justifyContent:"center", 
                margin:"8px"}}>
                Please Select Your Preferred Slot
                </p>
                
            </div>

            <button style={{width:"20%", height:"25px", background:"#c84b31",color:"white", 
            border:"none",
            padding:"5px", margin:"10px 40%"}}>BOOK APPOINTMENT
            </button>
            
        </div>
    )
}

export default MeetingRoom;

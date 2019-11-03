import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

export default function PositionButtons(props) {
    const { buttons, onClick = () =>{}} = props
    console.log(buttons)
    return (
        <React.Fragment>
            {buttons.map(
                (val, i) => 
                    <Button 
                        key={i}
                        onClick={onClick(buttons[i].value, i)}
                        variant={buttons[i].variant}
                    >
                        {buttons[i].value}
                    </Button>
            )}
        </React.Fragment>
    )
}
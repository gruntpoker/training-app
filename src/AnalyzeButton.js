import React from 'react';
import { useLocation, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function isDisabled(situation, position) {
    if (situation == 'open' && position == 'BB') {
        return true
    } else {
        return false
    }
}

export default function PositionButton(props) {
    const { position, disabled, key, match, onClick = () => { } } = props
    const query = useQuery()
    const situation = query.get('situation')
    const isHero = (query.get("hero") == position)
    const isVillian = (query.get('villian') == position)
    return (
        <Link to={getLink(situation, position, query)}>
            <Button
                key={key}
                variant={getVariant(isHero, isVillian)}
                disabled={isDisabled(situation, position)}
            >
                {position}
            </Button>
        </Link >
    )
}
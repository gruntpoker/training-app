import React from 'react';
import { useLocation, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function getVariant(isHero, isVillain, enabled) {
    if (isHero) {
        return 'outline-warning'
    } else if (isVillain) {
        return 'outline-danger'
    } else {
        return 'outline-info'
    }
}

function isDisabled(situation, position, hero, villain){
    return (situation === 'open' && position === 6) ||
        (situation === 'facing-raise' && !hero && position === 1) || 
        (situation === 'facing-raise' && hero && position >= hero) ||
        (situation === 'facing-3bet' && !hero && position === 6) ||
        (situation === 'facing-3bet' && hero && position <= hero) ||
        (situation === 'facing-4bet' && !hero && position === 1) ||
        (situation === 'facing-4bet' && hero && position >= hero) ||
        (situation === 'squeeze' && hero && villain && position <= villain ) ||
        (situation === 'squeeze' && hero && villain && position >= hero ) ||
        (situation === 'squeeze' && !hero && position < 5) ||
        (situation === 'squeeze' && parseInt(hero) === 5 && !villain  && position > 3) ||
        (situation === 'squeeze' && parseInt(hero) === 6 && !villain  && position > 4)
}

function getLink(situation, position, query) {
    if (situation === 'open') {
        query.set('hero', position)
        return {
            pathname: "/position/situation/ready",
            search: query.toString()
        }
    } else if (situation === 'squeeze') {
        let pathname, search
        if (query.get('hero') && query.get('villain')){
            query.set('caller', position)
            pathname = "/position/situation/ready"
            search = query.toString()
        } else if (query.get('hero') && ! query.get('villain')) {
            query.set('villain', position)
            pathname = "/position/situation/"
            search = query.toString()
        }
        else {
            query.set('hero', position)
            pathname = "/position/situation"
            search = query.toString()
        }
        return {
            pathname,
            search
        }
    } else {
        let pathname, search
        if (query.get('hero')) {
            query.set('villain', position)
            pathname = "/position/situation/ready"
            search = query.toString()
        } else {
            query.set('hero', position)
            pathname = "/position/situation"
            search = query.toString()
        }
        return {
            pathname,
            search
        }
    }
}

export default function PositionButton(props) {
    const { position, disabled, match, onClick = () => { } } = props
    const query = useQuery()
    const situation = query.get('situation')
    const isHero = (query.get("hero") == position)
    const hero = query.get('hero')
    const isVillain = (query.get('villain') == position)
    const villain = query.get('villain')
    return (
        <Link to={getLink(situation, position, query)}>
            <Button
                variant={getVariant(isHero, isVillain)}
                disabled={isDisabled(situation, position, hero, villain)}
            >
                {position}
            </Button>
        </Link >
    )
}
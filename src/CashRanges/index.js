import React, { useEffect, useState } from 'react'
import HandMatrix from '../Components/HandMatrix'
import { pfIndexToPocket } from '../Components/handMappings'
import { useLocation } from 'react-router-dom'

const styles = {
    cell: {
        width: "40px",
        height: "40px",
        textAlign: 'center',
        borderStyle: 'solid',
        borderWidth: '1px',
        lineHeight: '40px'
    }
}
function buildFetchURL(situation, hero, villain, caller) {
    let url = '/ranges/' + situation + '/' + hero
    if (villain) {
        url = url + '/' + villain
    }
    if (caller) {
        url = url + '/' + caller
    }
    return url
}
const Cell = function ({ value, index }) {
    const action = value.action
    const backgroundColor = action === 'r' ? 'green' : action === 'c' ? 'yellow' : 'white'
    return (
        <div style={{ ...styles.cell, backgroundColor }}>{pfIndexToPocket[index]}</div>
    )
}
export default function () {
    const [range, setRange] = useState([])
    const query = new URLSearchParams(useLocation().search)
    const situation = query.get('situation')
    const hero = query.get('hero')
    const villain = query.get('villain')
    const caller = query.get('caller')
    const url = buildFetchURL(situation, hero, villain, caller)
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url);
            res.json().then(res => {
                setRange(res)
            })
        }
        fetchData();
    }, []);
    return (
        <div>
            <HandMatrix range={range} Cell={Cell}></HandMatrix>
        </div>
    )
}
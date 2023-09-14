import React from 'react'
import '../Styles/thrContainer.css'

const ThrContainer = () => {
  return (
    <div className='third-container'>
        <div className='thr-nav-container'>
        <a href='#'>MOUNTAIN1</a>
        <a href='#'>MOUNTAIN2</a>
    </div>
    <div className='card-container'>
    <h3>SCHEDULE</h3>
    <table>
    <tr>
            <td>25Nov2016</td>
            <td>Vestibulum viverra</td>
        </tr>
        <tr>
            <td>28Nov2016</td>
            <td>Vestibulum viverra</td>
        </tr>
        <tr>
            <td>18Dec2016</td>
            <td>Vestibulum viverra</td>
        </tr>
        <tr>
            <td>7 Jan 2017</td>
            <td>Vestibulum viverra</td>
        </tr>
    </table>
    </div>
        <div className='sec-bottom-container'>
        <h1><strong className='mount-h1'> LOSANGELES </strong> <br/><strong className='mount-hh1'>MOUNTAINS</strong></h1>
        <div className='bottom-bar'>
        <h3>COPYRIGHT 2016. ALL RIGHTS RESERVED.</h3>
    </div>
    </div>
    </div>
  )
}

export default ThrContainer
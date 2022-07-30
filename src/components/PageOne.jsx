import React, { useState} from 'react'

export default function PageOne() {

    return (
        <div className='page-1'>
            <div style={{ width: '1700px' }} id="panel-1">
                <img src="page1/panel-1.png" alt="" style={{ maxWidth: '100%' }} />
            </div>
            <div className='d-flex'>
                <div style={{ width: '1200px' }} id="panel-2">
                    <img src="page1/panel-2.png" alt="" style={{ maxWidth: '100%' }} />
                </div>
                <div style={{ width: '400px' }} id="panel-3">
                    <img src="page1/panel-3.png" alt="" style={{ maxWidth: '100%' }} />
                </div>
            </div>
        </div>
    )
}

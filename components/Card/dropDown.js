import React, { useState } from 'react'

function dropDown({ submenu, setshow }) {
    const [show, setShow] = useState();
    return (
        <div >
            {show ?
                (
                    <>
                        {
                            submenu.map((items, index) => {
                                return (
                                    <li key={index}>
                                        <a>{items.tab}</a>
                                    </li>
                                )
                            })
                        }
                    </>
                ) : (
                    <></>
                )
            }

        </div>
    )
}

export default dropDown
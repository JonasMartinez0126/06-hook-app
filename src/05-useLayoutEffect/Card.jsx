import { useLayoutEffect, useRef, useState } from "react";


export const Card = ({ image, name }) => {
    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {
        const { height, width } = pRef.current.getBoundingClientRect();
        setBoxSize({ height, width });
    }, [])



    return (
        <>
        
        <div className="card my-card" >
            <img src={image} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title text-uppercase text-end" ref={pRef}>{name}</h5>
            </div>
        </div>
        <code>{ JSON.stringify(boxSize) }</code>
        </>
    )
}

import  React  from "react";

export const Counter = ({timer}) => {
    const seis = Math.floor(timer / 100000) % 10;
    const cinco = Math.floor(timer / 10000)% 10;
    const cuatro = Math.floor(timer / 1000)% 10;
    const tres = Math.floor(timer / 100)% 10;
    const dos = Math.floor(timer / 10)% 10;
    const uno = Math.floor(timer / 1)% 10;
    return (
        <div className="mainBox">
            <div className="fs-1 p-0 d-flex justify-content-center p-2 digito rounded ">
                <div>{seis}</div>
                <div>{cinco}</div>
                <div>{cuatro}</div>
                <div>{tres}</div>
                <div>{dos}</div>
                <div>{uno}</div>
            </div>
        </div>
    )
}


import React from "react";

const Block = ({ a }) => {
    return (
        <ul className="m-10 text-stone-200 text-3xl border-2 border-slate-300 p-5 flex justify-between items-center">
            <li>id: {a[0]}</li>
            <li>{a[1]}</li>
            <li>
                {" "}
                <img
                    src={a[2]}
                    alt=""
                    className="w-[100px] h-[100px] inline-block"
                />
            </li>
        </ul>
    );
};

export default Block;

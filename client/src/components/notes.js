const [active, setActive] = useState(true);
const [hidden, setHidden] = useState(true);
const [boo, setBoo] = useState(true);


return (
    <>

        <div>
            <button onClick={() => setHidden(!hidden)}>HIDE</button>
            <div hidden={hidden}>hidden component</div>
        </div>
        <div>
            <button onClick={() => setActive(!active)}>HIDE</button>
            <div hidden={active}>hidden component</div>
        </div>
        <div>
            <button onClick={() => setBoo(!boo)}>HIDE</button>
            <div hidden={boo}>hidden component</div>
        </div>


    </>
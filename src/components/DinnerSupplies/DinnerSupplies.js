import SilverWare from '../SilverWare/SilverWare';

function DinnerSupplies({ guestList }) {
    return (
        <>
            <h2>Dinner Supplies</h2>
            <SilverWare name="Spoons" count={guestList.length} />
            <SilverWare name="Forks" count={guestList.length} />
            <SilverWare name="Knives" count={guestList.length} />
        </>
    )
} // end DinnerSupplies fn

export default DinnerSupplies; // export to App
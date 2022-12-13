import MenuBtn from "./MenuBtn";

export default function MenuList({ list }) {

    return (
        <ul className='menu'>
            {
                list.map(({ title, newView }, idx) =>
                    <MenuBtn
                        key={idx}
                        title={title}
                        newView={newView}
                    />
                )
            }
        </ul>
    )
}

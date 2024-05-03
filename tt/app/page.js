import FormElement from './form.js'

export default function Page() {


    return (
        <>
            <h1 className='text-[4svw]'>Who are you</h1>
            <img
                src="/img/header.jpeg"
                alt="A picture of a man coding"
                className='z-[-1]  w-4/5 m-[5%]'
            />

            <FormElement />
        </>
    )
}

import {FC, PropsWithChildren} from "react";

import style from './HeaderComponent.module.css'
import {useNavigate, useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";


interface IProps extends PropsWithChildren {

}

interface IFormValues {
    text: string;
    radio: string;
}

const HeaderComponent: FC<IProps> = () => {
    const navigate = useNavigate()
    const [, setQuery] = useSearchParams()

    const navigateTo = (page: string) => {
        navigate(page)
    }

    const {register, handleSubmit} = useForm<IFormValues>({})
    const onSubmit = async (data: IFormValues) => {
        navigate('/search')
        setQuery({word: data.text, type: data.radio})
    }

    return (
        <div className={style.header}>

            <button onClick={() => navigateTo('/pokemon')}>Pokemon</button>
            <button onClick={() => navigateTo('/favorite')}>Favorite</button>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("text")} type="text" placeholder="Search"/>
                <button type="submit">Search</button>
                <label title="Search by name">
                    <input {...register("radio")} type="radio" value="name" defaultChecked/>
                    Name
                </label>
                <label title="For example:
fighting
flying
ground
ghost">
                    <input {...register("radio")} type="radio" value="type"/>
                    Type
                </label>
                <label title=" For example:
stench
drizzle
sturdy
damp
static">
                    <input {...register("radio")} type="radio" value="ability"/>
                    Ability
                </label>
            </form>
        </div>
    );
};

export {HeaderComponent};

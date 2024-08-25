import {FC, PropsWithChildren, useState} from "react";

import style from './HeaderComponent.module.css'
import {useNavigate, useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {pokemonActions} from "../../redux/slice/pokemonSlice";
import {pokemonsListUrl} from "../../constants/urls";
import {useAppDispatch} from "../../hook/reduxHooks";


interface IProps extends PropsWithChildren {

}

interface IFormValues {
    text: string;
    radio: string;
}

const HeaderComponent: FC<IProps> = () => {
    const navigate = useNavigate()
    const [activeButton, setActiveButton] = useState<string>('');
    const dispatch = useAppDispatch();
    const [, setQuery] = useSearchParams()

    const navigateTo = (page: string) => {
        navigate(page)
        dispatch(pokemonActions.getList({nextU: pokemonsListUrl}))
        setActiveButton(page);
    }

    const {register, handleSubmit} = useForm<IFormValues>({})

    const onSubmit = async (data: IFormValues) => {
        navigate('/search')
        setQuery({word: data.text, type: data.radio})
    }

    return (
        <div className={style.header}>

            <button className={`${style.button} ${activeButton === '/pokemon' ? style.active : ''}`}
                    onClick={() => navigateTo('/pokemon')}>Pokemon
            </button>
            <button className={`${style.button} ${activeButton === '/favorite' ? style.active : ''}`}
                    onClick={() => navigateTo('/favorite')}>Favorite
            </button>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className={style.inputText} {...register("text")} type="text" placeholder="Search"/>
                <button className={style.button} type="submit">Search</button>
                <label className={style.inputButton} title="Search by name">
                    <input  {...register("radio")} type="radio" value="name" defaultChecked/>
                    <span>Name</span>
                </label>

                <label className={style.inputButton} title="For example:
fighting
flying
ground
ghost">
                    <input {...register("radio")} type="radio" value="type"/>
                    <span>    Type</span>
                </label>
                <label className={style.inputButton} title=" For example:
stench
drizzle
sturdy
damp
static">
                    <input {...register("radio")} type="radio" value="ability"/>
                    <span>   Ability</span>
                </label>
            </form>
        </div>
    );
};

export {HeaderComponent};

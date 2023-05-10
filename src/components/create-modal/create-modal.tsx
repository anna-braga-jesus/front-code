import { useEffect} from 'react';
import { useState } from "react"
//import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { PostData } from "../../interface/PostData";
import "./modal.css";



import "./modal.css";
import { usePostDataMutate } from '../../hooks/usePostDataMutate';

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps){
    const [username, setUsername] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { mutate, isSuccess, isLoading } = usePostDataMutate();

    const submit = () => {
        const postData: PostData = {
            username,
            title, 
            content
        }
        mutate(postData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <header>CodeLeap Network</header>
                <h2>What's on your mind?</h2>
                <form className="input-container">
                    <Input label='username' value ={username} updateValue={setUsername}></Input>
                    <Input label="title" value={title} updateValue={setTitle}/>
                    <Input label="content" value={content} updateValue={setContent}/>
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'Creating...' : 'Create'}
                </button>
            </div>
        </div>
    )
}
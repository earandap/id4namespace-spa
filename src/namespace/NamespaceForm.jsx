import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {namespaceService} from "@/_services";

const NamespaceForm = props => {
    const {register, handleSubmit} = useForm();
    const [result, setResult] = useState('');
    const [resultClass, setResultClass] = useState('');
    const onSubmit = values => {
        namespaceService.getId(values).then((v) => {
            setResult(v.id)
            setResultClass("alert alert-success")
            console.log(v);
        }).catch(() => {
            setResult("There was a problem requesting the ID")
            setResultClass("alert alert-danger")
        })
    }

    return (
        <div>
            <form className="form-inline mt-2 mt-md-0" onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control mr-sm-2" name="name" type="text" required ref={register} placeholder="Namespace"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Generate!</button>
            </form>

            <br/>
            <div className={resultClass} role="alert">
                {result}
            </div>
        </div>
    );
};

export {NamespaceForm}

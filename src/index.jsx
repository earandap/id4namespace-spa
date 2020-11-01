import React from 'react';
import {render} from 'react-dom';
import {NamespaceForm} from "./namespace/NamespaceForm";

render(
    <div className="bg-light p-5 rounded">
        <h1>ID Generator for Namespace</h1>
        <NamespaceForm/>
    </div>,
    document.getElementById('app')
);

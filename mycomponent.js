import React, { useState } from 'react';

const MyComponent = () => {
    const [condition, setCondition] = useState(true);

    return (
        <div
            style={{
                width: '22%',
                border: '1px solid',
                padding: '10px',
                textAlign: 'center'
            }}
        >
            {condition ? "✗" : "✗"}
        </div>
    );
};

export default MyComponent;

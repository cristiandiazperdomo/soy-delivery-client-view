import {PackageError} from "../../redux/feature/packageSlice";

import "./FormError.css";

export const FormError = ({code, description}: PackageError) => {
    return (
        <>
            {code < 200 ||
                (code > 299 && (
                    <div className="form-error-container">
                        <p>{description}</p>
                    </div>
                ))}
        </>
    );
};

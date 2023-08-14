import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function RegisterForm() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            address: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(5, "Cần nhập nhiều hơn 5 ký tự")
                .max(25, "Không được nhập quá 25 ký tự")
                .required("Không được để trống"),
            email: Yup.string().email("Email chưa đúng định dạng").required("Không được để trống"),
            address: Yup.string().required("Không được để trống"),
            password: Yup.string()
                .min(8, "Cần nhập nhiều hơn 8 ký tự")
                .required("Không được để trống"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password")], "Mật khẩu không trùng khớp")
                .required("Không được để trống"),
        }),
        onSubmit: (values) => console.log(values),
    });

    return (
        <div>
            <h1>RegisterForm</h1>
            <form action="" onSubmit={formik.handleSubmit}>
                <label htmlFor="">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name && (
                    <p style={{ color: "red" }}>{formik.errors.name}</p>
                )}
                <br />
                <label htmlFor="">Email:</label>
                <input
                    type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                {formik.errors.email && formik.touched.email && (
                    <p style={{ color: "red" }}>{formik.errors.email}</p>
                )}
                <br />
                <label htmlFor="">Address:</label>
                <input
                    type="text"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                />
                {formik.errors.address && formik.touched.address && (
                    <p style={{ color: "red" }}>{formik.errors.address}</p>
                )}
                <br />
                <label htmlFor="">Password:</label>
                <input
                    type="text"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                {formik.errors.password && formik.touched.password && (
                    <p style={{ color: "red" }}>{formik.errors.password}</p>
                )}
                <br />
                <label htmlFor="">Confirm Password:</label>
                <input
                    type="text"
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                />
                {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                    <p style={{ color: "red" }}>{formik.errors.confirmPassword}</p>
                )}
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterForm;

import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import {useAuth} from "../context/AuthContext";
import {useRouter} from "next/router";

export default function Home() {
    const {user, login} = useAuth()
    const initialValues = {
        email: '',
        password: ''
    }
    const router = useRouter()

    const inputError = "mb-2 w-1/2 px-4 py-2 rounded transition duration-300 border border-gray-300 focus:border-transparent focus: outline-none focus:ring-4 focus:ring-blue-200"
    const inputDefault = "mb-2 w-1/2 px-4 py-2 rounded transition duration-300 border border-gray-300 focus:border-transparent focus: outline-none focus:ring-4 focus:ring-blue-200"
    const validation = Yup.object(
        {
            email: Yup.string()
                .email("Alamat email tidak valid")
                .required("Email harus di isi"),
            password: Yup.string()
                .required("Password harus di isi")
        }
    )
    const handleSubmit = async (values) => {
        alert("email anda: " + values.email + "password anda: " + values.password)
        try {
            await login(values.email, values.password)
            router.push('/home')
        } catch (err) {
            console.log(err)
        }
    }
  return (
    <div>
        <div className="grid h-screen place-items-center">
            <div className="container w-3/4">
                <div className="flex flex-col bg-red-300 shadow-lg rounded-lg p-8">
                    <h1 className="text-2xl text-center mb-2">Welcome to Khadijatul Kubra Dashboard</h1>
                    <h1 className="text-2xl text-center mb-2">Login</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validation}
                        onSubmit={async (values, {resetForm}) => {
                            await new Promise((r) =>  setTimeout(r, 500));
                            resetForm({})
                            handleSubmit(values)
                        }}
                    >
                        {props => {
                            const {touched, errors} = props
                            return (
                                <Form className="grid place-items-center">
                                    <h3 className="w-1/2 mb-2">Your Email</h3>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className={errors.email && touched.email ? inputDefault : inputError}
                                    />
                                    {errors.email && touched.email ? (
                                        <div className="w-1/2">
                                            <p className="text-red-600">{errors.email}</p>
                                        </div>
                                    ) : null}
                                    <h3 className="w-1/2 mb-2">Your Password</h3>
                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className={errors.password && touched.password ? inputDefault : inputError}
                                    />
                                    {errors.password && touched.password ? (
                                        <div className="w-1/2">
                                            <p className="text-red-600">{errors.password}</p>
                                        </div>
                                    ) : null}
                                    <button type="submit" className="bg-blue-300 rounded my-2 px-4 py-2 transition duration-100 hover:-translate-y-1">Login</button>
                                </Form>
                            )
                        }}
                    </Formik>
                </div>

            </div>
        </div>

    </div>
  )
}



const Layout = ({children}) =>{//hijos que va a recibir el componente layout

    return(
        <div className="flex flex-col items-center mt-20">
            {children}
        </div>
    );

}

export default Layout;
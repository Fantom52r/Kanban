import React, { useState } from 'react'

const Header = ({addTasks}) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="header">
    <div className="container">
        <div className="header__block">
            <div className="header__logo _show _light">
                <a href="" target="_self"><img src="/images/logo.png" alt="logo"/></a>
            </div>
            <div className="header__logo _dark">
                <a href="" target="_self"><img src="/images/logo_dark.png" alt="logo"/></a>
            </div>
            <nav className="header__nav">
                <button onClick={addTasks} className="header__btn-main-new _hover01" id="btnMainNew"><a href="#">Создать новую задачу</a></button>
                <a href="#user-set-target" onClick={()=> setIsOpen(!isOpen)} className="header__user _hover02">Ivan Ivanov</a>
                {
                    isOpen ?                 <div className="header__pop-user-set pop-user-set" id="user-set-target">
                    <p className="pop-user-set__name">Ivan Ivanov</p>
                    <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                    <div className="pop-user-set__theme">
                        <p>Темная тема</p>
                        <input type="checkbox" className="checkbox" name="checkbox"/>
                    </div>
                    <button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
                </div> : null
                }

            </nav>					
        </div>
    </div>			
</header>
  )
}

export default Header

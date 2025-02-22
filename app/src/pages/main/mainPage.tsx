import {ReactNode} from 'react';
import ThemeSwitcher from "@/shared/ui/theme";
import Button, {EButtonVariant} from "@/shared/ui/buttons";
import BasketIcon from "@/assets/icons/basket_icon.svg";
import CloseIcon from "@/assets/icons/close_icon.svg";
import DownloadIcon from "@/assets/icons/download_icon.svg";
import LinkIcon from "@/assets/icons/link_icon.svg";
import SearchIcon from "@/assets/icons/search_icon.svg";
import TagsIcon from "@/assets/icons/tags_icon.svg";


const MainPage = (): ReactNode => {

    return (
        <main className="p-4 m-5">
            <header className="text-center h-10 bg-amber-200 dark:bg-amber-700 ">
                <div>

                </div>
            </header>
            <ThemeSwitcher/>
            <section>
                <div className="text-center h-10 bg-amber-200 dark:bg-amber-700 "></div>
                <h1>sdfasdf</h1>
                <div className="grid grid-cols-8 gap-4">
                    <div>
                        <Button variant={EButtonVariant.BASE} label='Очистить корзину'/>
                    </div>
                    <div>
                        <Button variant={EButtonVariant.BASE} label='Сохранить'/>
                    </div>

                </div>
                <div className="grid grid-cols-10 gap-4">
                    <div>
                        <Button variant={EButtonVariant.ICON} src={BasketIcon}/>
                    </div>
                    <div>
                        <Button variant={EButtonVariant.ICON} src={CloseIcon}/>
                    </div>
                    <div><Button variant={EButtonVariant.ICON} src={DownloadIcon}/></div>
                    <div><Button variant={EButtonVariant.ICON} src={LinkIcon}/></div>
                    <div><Button variant={EButtonVariant.ICON} src={SearchIcon}/></div>
                    <div><Button variant={EButtonVariant.ICON} src={TagsIcon}/></div>


                </div>
            </section>
        </main>
    );
};

export default MainPage;
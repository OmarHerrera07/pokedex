import { Button } from "@mantine/core"
import Sesion from "./Sesion"
import { ButtonCustom } from "./ButtonCustom"

export const Header = () => {
    return (
        <div className="mb-10">
            <div className="grid grid-cols-2">
                <div className="flex justigy-center">
                    <img src="/pokedex-logo.png" className="w-70 h-20" alt="" />
                </div>
                <div className="flex showdow-2x1 p-2 border-b-1 border-white grow">
                    <div className="grow">
                        <div className="flex space-x-10">
                            <div className="">
                                {/* <Button color="yellow">Mi cuenta</Button> */}
                                <ButtonCustom
                                    label="Mi equipo"
                                    color="warning"
                                    className="ml-10"
                                    isLoading={true}
                                />
                            </div>
                            <div className="flex spave-x-4">

                            </div>
                        </div>
                    </div>
                    <Sesion />
                </div>
            </div>
        </div>
    )
}
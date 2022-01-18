import GroupBox from "@bizhermit/react-sdk/dist/containers/groupbox";
import Row from "@bizhermit/react-sdk/dist/containers/row";
import Button from "@bizhermit/react-sdk/dist/controls/button";
import useMessageBox from "@bizhermit/react-sdk/dist/hooks/message-box";
import { StyleContext } from "@bizhermit/react-sdk/dist/styles/style";
import { NextPage } from "next";
import Link from "next/link";
import { useContext, VFC } from "react";

const SandboxPage: NextPage = () => {
    return <SandboxComponent />;
};

export default SandboxPage;

const SandboxComponent: VFC = () => {
    const style = useContext(StyleContext);
    const msgbox = useMessageBox();
    return (
        <>
        <h1>Sandbox</h1>
        <Link href="/">index</Link>
        <Row>
            <GroupBox caption="color">
                <Button click={() => {
                    style.setColor(null);
                }}>unset</Button>
                <Button click={() => {
                    style.setColor("light");
                }}>Light</Button>
                <Button click={() => {
                    style.setColor("dark");
                }}>Dark</Button>
            </GroupBox>
            <GroupBox caption="design">
                <Button click={() => {
                    style.setDesign(null);
                }}>unset</Button>
                <Button click={async (unlock) => {
                    // style.setDesign("flat");
                    await msgbox.alert("Unimplemented...");
                    unlock();
                }}>Flat</Button>
                <Button click={() => {
                    style.setDesign("material");
                }}>Material</Button>
                <Button click={() => {
                    style.setDesign("neumorphism");
                }}>Neumorphism</Button>
            </GroupBox>
        </Row>
        </>
    );
};
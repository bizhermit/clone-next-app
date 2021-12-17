import { NextPage } from "next";
import Link from "next/link";
import { VFC } from "react";

const SandboxPage: NextPage = () => {
    return <SandboxComponent />;
};

export default SandboxPage;

const SandboxComponent: VFC = () => {
    return (
        <>
        <h1>Sandbox</h1>
        <Link href="/">index</Link>
        </>
    );
};
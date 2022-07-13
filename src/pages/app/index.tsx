import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import MainLayout from "@/organisms/layout/MainLayout";

const Main: NextPageWithLayout = () => {
  return <>Main</>;
};

Main.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Main;

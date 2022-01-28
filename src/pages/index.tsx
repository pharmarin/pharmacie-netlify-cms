import { Tab } from "@headlessui/react";
import Layout from "components/Layout";
import PostsIndexContainer from "containers/posts/Index";
import ProductsIndexContainer from "containers/products/Index";
import React from "react";
import { twMerge } from "tailwind-merge";

const IndexPage = () => {
  const tabClassName = (selected: boolean) =>
    twMerge(
      "px-4 py-2 text-sm leading-5 font-medium text-green-700 rounded-lg",
      "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-green-400 ring-white ring-opacity-60",
      selected ? "bg-white shadow" : "text-white hover:bg-white/[0.12]"
    );

  return (
    <Layout>
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-green-900/20 rounded-xl w-fit mx-auto">
          <Tab className={({ selected }) => tabClassName(selected)}>
            Articles
          </Tab>
          <Tab className={({ selected }) => tabClassName(selected)}>
            Produits
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2 p-3">
          <Tab.Panel>
            <PostsIndexContainer as={React.Fragment} />
          </Tab.Panel>
          <Tab.Panel>
            <ProductsIndexContainer as={React.Fragment} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </Layout>
  );
};

export default IndexPage;

import { Tab } from "@headlessui/react";
import HomeCard from "components/HomeCard";
import Layout from "components/Layout";
import PostsIndexContainer from "containers/posts/Index";
import React from "react";
import { twMerge } from "tailwind-merge";

const IndexPage = () => {
  const tabClassName = (selected: boolean) =>
    twMerge(
      "px-4 py-2 text-sm leading-5 font-medium text-green-700 rounded-lg",
      "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-green-400 ring-white ring-opacity-60",
      selected ? "bg-white shadow" : "text-white hover:bg-white/[0.12]"
    );

  const tabs = [
    {
      content: <PostsIndexContainer as={React.Fragment} />,
      title: "Articles",
    },
    {
      cards: [
        {
          title: "Tous les produits",
          link: "products/ ",
        },
        {
          title: "Trier par laboratoire",
          link: "laboratoires/",
        },
      ],
      title: "Produits",
    },
  ];

  return (
    <Layout>
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-green-900/20 rounded-xl w-fit mx-auto">
          {tabs.map((tab) => (
            <Tab className={({ selected }) => tabClassName(selected)}>
              {tab.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 p-3">
          {tabs.map((tab) => (
            <Tab.Panel>
              {tab.cards ? (
                <div className="w-max mx-auto grid grid-cols-2 gap-4">
                  {tab.cards.map((card) => (
                    <HomeCard key={card.link} {...card} />
                  ))}
                </div>
              ) : (
                tab.content
              )}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </Layout>
  );
};

export default IndexPage;

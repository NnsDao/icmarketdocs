import Link from '@docusaurus/Link';
import { Github, Twitter } from '@styled-icons/boxicons-logos';
import React from 'react';
import IcmarketLogo from '../../static/icmarket.png';

export default function Footer() {
  return (
    <footer className="bg-background-100 py-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start p-4 md:px-12">
        <div className="flex flex-col space-y-4">
          <Link href="https://ltdzc-siaaa-aaaag-qab5q-cai.raw.ic0.app/">
            <p className="flex items-center">
              <img src={IcmarketLogo} width={45} height={45} />
              <span className="ml-3 text-gray-600 hover:text-primary">
                ICMarket
              </span>
            </p>
          </Link>
          <p className="text-sm leading-relaxed text-text-100">
            ICmarket is a 「diversified」 「tradable」platform for NFTs, which
            provides user-directed creation and collaboration. It also provides
            subDAO to join and create the common collections and collaborative
            NFTs.
          </p>
        </div>
        <div className="mt-8 flex w-full flex-col lg:flex-row">
          <div className="flex flex-1 flex-col items-start">
            <div className="mt-8 flex items-center space-x-3 text-text-100">
              <Link
                href="https://twitter.com/icmarketapp"
                className="inline-flex text-current transition hover:text-primary"
              >
                <Twitter className="h-8" />
              </Link>
              <Link
                href="https://github.com/NnsDao/ICMarket"
                className="inline-flex text-current transition hover:text-primary"
              >
                <Github className="h-8" />
              </Link>
            </div>
          </div>
          <div className="mt-12 grid flex-1 grid-cols-2 gap-8 md:grid-cols-2 lg:mt-0 lg:grid-cols-3">
            <div className="space-y-2">
              <div className="text-sm font-normal text-text-100">Product</div>
              <ul className="list-none space-y-2 p-0 text-sm">
                <li>
                  <Link
                    href="https://ltdzc-siaaa-aaaag-qab5q-cai.raw.ic0.app/"
                    className="text-current hover:no-underline"
                  >
                    ICmarket
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-normal text-text-100">Company</div>
              <ul className="list-none space-y-2 p-0 text-sm">
                <li>
                  <Link
                    href="https://nnsdao.org"
                    className="text-current hover:no-underline"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full text-center text-sm text-text-100">
          Copyright © ICMARKET 2022. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

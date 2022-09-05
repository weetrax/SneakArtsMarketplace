import * as React from "react";
import PropTypes from "prop-types";
import { Artist } from "../../../types";
import {
  LightningBoltIcon,
  MapIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";

type ArtistItemProps = {
  artist: Artist;
};

const ArtistItem: React.FC<ArtistItemProps> = ({ artist }) => {
  return (
    <div
      key={artist.id}
      className="col-span-1 flex flex-col text-center bg-white dark:bg-dark-600 border border-primary-500 rounded-lg shadow divide-y divide-primary-500"
    >
      <div className="flex-1 flex flex-col p-8">
        <img
          className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
          src={artist.imageUrl}
          alt=""
        />
        <h3 className="mt-6 text-sm font-medium">{artist.name}</h3>
        <dl className="mt-1 flex-grow flex flex-col justify-between">
          <dt className="sr-only">Name</dt>
          <dd className="text-gray-500 dark:text-gray-400 text-xs italic">
            {artist.city}, {artist.country}
          </dd>
          <dt className="sr-only">Tags</dt>
          <dd className="mt-3 flex justify-center items-center gap-1">
            {artist.tags.map((tag, index) => {
              return (
                <span className="px-2 py-1 text-primary-800 text-xs font-medium bg-primary-100 rounded-full">
                  {tag}
                </span>
              );
            })}
          </dd>
        </dl>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-primary-500">
          <div className="w-0 flex-1 flex">
            <a
              href={`https://sneakarts.com/fr/artist/${artist.name}`}
              className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm font-medium rounded-bl-lg hover:text-primary-500 duration-200 transition-all ease-in-out"
            >
              <LightningBoltIcon className="w-5 h-5" aria-hidden="true" />
              <span className="ml-3">Créations</span>
            </a>
          </div>
          <div className="-ml-px w-0 flex-1 flex">
            <a
              href={`https://sneakarts.com/fr/artist/${artist.name}`}
              className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm font-medium rounded-br-lg hover:text-primary-500 duration-200 transition-all ease-in-out"
            >
              <ShoppingBagIcon className="w-5 h-5" aria-hidden="true" />
              <span className="ml-3">Commander</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

ArtistItem.propTypes = {
  //
};

export default ArtistItem;

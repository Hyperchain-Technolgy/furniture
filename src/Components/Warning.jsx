import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react';

const Warning = ({ heading, description }) => {
  return (
    <div className="rounded-md bg-yellow-50 p-4 absolute top-10 left-1/2 transform -translate-x-1/2 animate-pulse">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">{heading}</h3>
          {description &&
            <div className="mt-2 text-sm text-yellow-700">
              <p>{description}</p>
            </div>}
        </div>
      </div>
    </div>
  )
}

export default Warning
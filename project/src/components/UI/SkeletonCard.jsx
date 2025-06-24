import React from 'react'

const SkeletonCard = () => {
  return (
    <div className="card p-6 animate-pulse">
      <div className="flex justify-between items-start mb-4">
        <div className="skeleton h-6 w-3/4 mb-2"></div>
        <div className="skeleton h-6 w-16 rounded-full"></div>
      </div>
      
      <div className="space-y-3">
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-2/3"></div>
        
        <div className="flex items-center space-x-4 mt-4">
          <div className="skeleton h-4 w-24"></div>
          <div className="skeleton h-4 w-32"></div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-4 w-28"></div>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-6">
        <div className="skeleton h-8 w-20"></div>
        <div className="flex space-x-2">
          <div className="skeleton h-8 w-16"></div>
          <div className="skeleton h-8 w-16"></div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonCard
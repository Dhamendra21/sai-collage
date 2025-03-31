import { useState } from 'react';
import courseData from '../courseData';
import Navbar from './navbar/Navbar';

const CoursesPage = () => {
  const [activeTab, setActiveTab] = useState('UG');
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Accessing BCA program details
const bcaProgram = courseData.UG[0];
console.log(`Career options for ${bcaProgram.name}: ${bcaProgram.career_opportunities.join(', ')}`);

// Filtering PG programs with entrance exams
const entranceBasedPG = courseData.PG.filter(program => program.entrance_exam);

  const filteredCourses = courseData[activeTab].filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.full_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderDetailRow = (label, value) => (
    <div className="grid grid-cols-3 py-2 border-b border-gray-100">
      <span className="text-gray-500">{label}</span>
      <span className="col-span-2 font-medium">
        {Array.isArray(value) ? value.join(', ') : value || 'N/A'}
      </span>
    </div>
  );

  return (
    <div className='w-screen overflow-x-hidden'>
        


    <div className="min-h-screen relative w-screen overflow-x-hidden bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        
    <Navbar/>
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">University Programs</h1>
            <p className="mt-3 text-xl text-gray-600">
              Explore our comprehensive course offerings
            </p>
          </div>
  
          {/* Search and Filter */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search courses..."
              className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="flex space-x-1 bg-white p-1 rounded-lg shadow-sm">
              {['UG', 'PG', 'Diploma'].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => {
                    setActiveTab(tab);
                    setExpandedCourse(null);
                  }}
                >
                  {tab === 'UG' ? 'Undergraduate' : 
                   tab === 'PG' ? 'Postgraduate' : 'Diploma'}
                </button>
              ))}
            </div>
          </div>
  
          {/* Course Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => (
                <div
                  key={course.name}
                  className={`bg-white rounded-xl shadow-md overflow-hidden transition-all ${
                    expandedCourse === course.name ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <div className="p-6">
                    {/* Course Header */}
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {course.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {course.full_name}
                        </p>
                      </div>
                      <span className="inline-flex items-center h-6 px-3 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                        {course.type}
                      </span>
                    </div>
  
                    {/* Quick Info */}
                    <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-gray-500">Duration</p>
                        <p className="font-medium">{course.duration}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Semesters</p>
                        <p className="font-medium">{course.semesters}</p>
                      </div>
                    </div>
  
                    {/* Expand Button */}
                    <button
                      onClick={() => setExpandedCourse(
                        expandedCourse === course.name ? null : course.name
                      )}
                      className="mt-4 w-full flex items-center justify-between text-sm font-medium text-blue-600 hover:text-blue-500"
                    >
                      {expandedCourse === course.name ? 'Show Less' : 'View Details'}
                      <svg
                        className={`h-5 w-5 transition-transform ${
                          expandedCourse === course.name ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
  
                    {/* Expanded Details */}
                    {expandedCourse === course.name && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="space-y-3 text-sm">
                          {renderDetailRow('Credits', course.credits)}
                          {renderDetailRow('Eligibility', course.eligibility)}
                          {renderDetailRow('Core Subjects', course.core_subjects)}
                          {renderDetailRow('Career Paths', course.career_opportunities)}
                          {renderDetailRow('Lab Facilities', course.lab_facilities)}
                          {renderDetailRow('Avg Salary', course.avg_salary)}
                        </div>
                        <div className="mt-6 flex space-x-3">
                          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium">
                            Download Brochure
                          </button>
                          <button className="flex-1 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 px-4 rounded-md text-sm font-medium">
                            Apply Now
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <p className="text-gray-500">No courses found matching your search</p>
            </div>
          )}
        </div>
      </div>
    </div>
    
  );
};

export default CoursesPage;
insert into public.programs (slug, title, description, short_description, tagline, category, level, price, focus, outcomes, skills, tools, featured, published, display_order, duration)
values
  ('stem-explorer', 'STEM Explorer', 'A broad STEM journey for curious students who enjoy experiments, reasoning, and building.', 'Science, mathematics, engineering, and creativity in one exploratory path.', 'Science + mathematics + engineering + creativity', 'STEM', 'Beginner', 49, array['Science','Math','Engineering','Creativity'], array['Develop scientific thinking','Solve open-ended challenges','Apply math in real life'], array['Scientific thinking','Problem solving','Engineering'], '{}', false, true, 1, null),
  ('young-coder', 'Young Coder', 'A structured intro to coding that moves from fundamentals to small real-world builds.', 'Programming foundations for building confidence through projects.', 'Programming foundations for building confidence', 'Coding', 'Beginner', 49, array['Python','Logic','Problem solving','Projects'], array['Understand logic and loops','Write small programs','Create simple apps'], array['Python','Logic','Problem solving','Projects'], '{}', false, true, 2, null),
  ('robotics-builder', 'Robotics Builder', 'Design, build, and iterate on robots that sense and respond to the world.', 'Electronics, robotics, and automation through iterative builds.', 'Electronics + robotics + automation', 'Robotics', 'Intermediate', 49, array['Arduino','Sensors','Movement','Automation'], array['Build robotics systems','Program control loops','Prototype automation'], array['Arduino','Sensors','Movement','Automation'], '{}', false, true, 3, null),
  ('ai-explorer', 'AI Explorer', 'A future-ready path into AI systems, reasoning, and practical idea generation.', 'AI, machine learning, generative AI, and responsible use.', 'AI + ML + generative AI + responsible use', 'AI', 'Intermediate', 49, array['Machine Learning','GenAI','Model thinking','Ethics'], array['Recognize AI patterns','Use AI for projects','Evaluate outcomes critically'], array['Machine Learning','Generative AI','Model thinking','Ethics'], '{}', false, true, 4, null),
  ('future-engineer', 'Future Engineer', 'Create a systems mindset through engineering, coding, and applied technology projects.', 'Connect coding, AI, robotics, and product design in applied builds.', 'Coding + AI + robotics + projects', 'Technology', 'Intermediate', 49, array['Engineering','AI','Robotics','Product design'], array['Think like an engineer','Build integrated systems','Move from ideas to prototypes'], array['Engineering','AI','Robotics','Product design'], '{}', true, true, 0, null),
  ('full-stack-developer', 'Full Stack Developer', 'Prepare for modern product development with end-to-end engineering skills.', 'Frontend, backend, databases, and deployment in one product pathway.', 'Frontend + backend + database + deployment', 'Technology', 'Advanced', 49, array['Web','APIs','Databases','Deployment'], array['Ship full applications','Work across layers','Build product-ready software'], array['Frontend','APIs','Databases','Deployment'], '{}', false, true, 6, null)
on conflict (slug) do update set
  title = excluded.title,
  description = excluded.description,
  short_description = excluded.short_description,
  tagline = excluded.tagline,
  category = excluded.category,
  level = excluded.level,
  price = excluded.price,
  focus = excluded.focus,
  outcomes = excluded.outcomes,
  skills = excluded.skills,
  featured = excluded.featured,
  published = excluded.published,
  display_order = excluded.display_order;

insert into public.roadmaps (slug, title, description, category, level, featured, published, display_order)
values
  ('python-developer', 'Python Developer', 'Move from programming fundamentals toward confident Python projects and deeper development skills.', 'Coding', 'Beginner', true, true, 1),
  ('web-developer', 'Web Developer', 'Build from web fundamentals toward responsive interfaces and complete product projects.', 'Technology', 'Intermediate', true, true, 2),
  ('ai-engineer', 'AI Engineer', 'Develop a foundation in AI systems, practice evaluating outcomes, and apply your skills in projects.', 'AI', 'Intermediate', true, true, 3),
  ('robotics-engineer', 'Robotics Engineer', 'Connect STEM foundations with robotics, sensors, control, and iterative engineering projects.', 'Robotics', 'Intermediate', true, true, 4),
  ('full-stack-developer', 'Full Stack Developer', 'Trace a path from responsive web foundations through application structure and end-to-end product thinking.', 'Technology', 'Advanced', false, true, 5),
  ('machine-learning-engineer', 'ML Engineer', 'Explore data, model behavior, evaluation, and responsible machine learning projects.', 'AI', 'Intermediate', false, true, 6),
  ('ar-vr-developer', 'AR / VR Developer', 'Move from spatial design and 3D concepts toward interactive immersive experiences.', 'AR / VR', 'Intermediate', false, true, 7),
  ('data-scientist', 'Data Scientist', 'Build from observation and measurement toward data interpretation and evidence-based projects.', 'Data', 'Intermediate', false, true, 8),
  ('game-developer', 'Game Developer', 'Explore interactive systems, spatial thinking, and creative technology through small game-like builds.', 'Creative Technology', 'Intermediate', false, true, 9),
  ('iot-developer', 'IoT Developer', 'Connect physical inputs, control logic, and automation through sensor-led engineering projects.', 'Robotics', 'Intermediate', false, true, 10),
  ('cybersecurity', 'Cybersecurity', 'Develop a foundation in secure thinking, digital systems, and responsible technology practice.', 'Technology', 'Beginner', false, true, 11),
  ('stem-explorer', 'STEM Explorer', 'Explore science, mathematics, and engineering through observation, experiments, and creative problem solving.', 'STEM', 'Beginner', false, true, 12)
on conflict (slug) do update set
  title = excluded.title,
  description = excluded.description,
  category = excluded.category,
  level = excluded.level,
  featured = excluded.featured,
  published = excluded.published,
  display_order = excluded.display_order;

update public.roadmaps as roadmap
set skills = content.skills, tools = content.tools
from (values
  ('python-developer', array['Python','Logic','Functions','Problem solving']::text[], array[]::text[]),
  ('web-developer', array['HTML/CSS','JavaScript','Frontend architecture']::text[], array[]::text[]),
  ('ai-engineer', array['AI literacy','Machine learning','Model evaluation','Python']::text[], array[]::text[]),
  ('robotics-engineer', array['Electronics','Robotics','Systems thinking','Experiment design']::text[], array[]::text[]),
  ('full-stack-developer', array['Frontend','APIs','Databases','Deployment']::text[], array[]::text[]),
  ('machine-learning-engineer', array['Python','Data','Model evaluation','Responsible AI']::text[], array[]::text[]),
  ('ar-vr-developer', array['3D design','Spatial interaction','Immersive storytelling']::text[], array[]::text[]),
  ('data-scientist', array['Data interpretation','Experiment design','Python']::text[], array[]::text[]),
  ('game-developer', array['Interactive systems','3D thinking','Creative problem solving']::text[], array[]::text[]),
  ('iot-developer', array['Sensors','Automation','Systems thinking']::text[], array[]::text[]),
  ('cybersecurity', array['Systems thinking','Web fundamentals','Responsible practice']::text[], array[]::text[]),
  ('stem-explorer', array['Critical thinking','Experiment design','Data interpretation']::text[], array[]::text[])
) as content(slug, skills, tools)
where roadmap.slug = content.slug;

insert into public.classes (slug, title, published) values
  ('stem', 'STEM Foundations', true),
  ('python', 'Python', true),
  ('robotics', 'Robotics Foundations', true),
  ('artificial-intelligence', 'AI Foundations', true),
  ('ar-vr', 'AR / VR Creator', true),
  ('web-development', 'Web Development', true)
on conflict (slug) do update set title = excluded.title, published = excluded.published;

insert into public.projects (slug, title, published) values
  ('mini-web-crawler', 'Mini Web Crawler', true),
  ('ai-chatbot', 'AI Idea Assistant', true),
  ('robot-arm', 'Robot Arm Challenge', true),
  ('science-lab', 'STEM Lab Builder', true),
  ('immersive-scene', 'Immersive Scene', true)
on conflict (slug) do update set title = excluded.title, published = excluded.published;

insert into public.roadmap_steps (roadmap_id, step_number, title, description, type, display_order)
select roadmap.id, step.ordinality::integer, step.title, stage.description, 'stage', step.ordinality::integer
from public.roadmaps as roadmap
cross join lateral unnest(array['Start','Foundation','Practice','Project','Advanced','Career']) with ordinality as step(title, ordinality)
cross join lateral (select case step.title
  when 'Start' then 'Set a direction and get familiar with the subject area.'
  when 'Foundation' then 'Build an understanding of the core concepts and vocabulary.'
  when 'Practice' then 'Revisit ideas through exercises, experimentation, and feedback.'
  when 'Project' then 'Bring concepts together in a practical, original build.'
  when 'Advanced' then 'Explore more complex systems and strengthen your technical judgment.'
  else 'Reflect on your skills and choose a focused next step.' end as description) as stage
where roadmap.published = true
on conflict do nothing;

insert into public.roadmap_programs (roadmap_id, program_id)
select roadmap.id, program.id from (values
  ('python-developer','young-coder'), ('web-developer','full-stack-developer'),
  ('ai-engineer','ai-explorer'), ('ai-engineer','future-engineer'),
  ('robotics-engineer','robotics-builder'), ('robotics-engineer','stem-explorer'),
  ('full-stack-developer','full-stack-developer'), ('machine-learning-engineer','ai-explorer'),
  ('data-scientist','stem-explorer'), ('data-scientist','young-coder'),
  ('iot-developer','robotics-builder'), ('cybersecurity','full-stack-developer'),
  ('stem-explorer','stem-explorer')
) as relation(roadmap_slug, program_slug)
join public.roadmaps as roadmap on roadmap.slug = relation.roadmap_slug
join public.programs as program on program.slug = relation.program_slug
on conflict do nothing;

insert into public.roadmap_classes (roadmap_id, class_id)
select roadmap.id, course.id from (values
  ('python-developer','python'), ('web-developer','web-development'),
  ('ai-engineer','artificial-intelligence'), ('ai-engineer','python'),
  ('robotics-engineer','robotics'), ('robotics-engineer','stem'),
  ('full-stack-developer','web-development'), ('machine-learning-engineer','artificial-intelligence'),
  ('machine-learning-engineer','python'), ('ar-vr-developer','ar-vr'),
  ('data-scientist','stem'), ('data-scientist','python'),
  ('game-developer','ar-vr'), ('game-developer','web-development'),
  ('iot-developer','robotics'), ('iot-developer','python'),
  ('cybersecurity','web-development'), ('cybersecurity','python'),
  ('stem-explorer','stem')
) as relation(roadmap_slug, class_slug)
join public.roadmaps as roadmap on roadmap.slug = relation.roadmap_slug
join public.classes as course on course.slug = relation.class_slug
on conflict do nothing;

insert into public.roadmap_projects (roadmap_id, project_id)
select roadmap.id, project.id from (values
  ('python-developer','mini-web-crawler'), ('web-developer','mini-web-crawler'),
  ('ai-engineer','ai-chatbot'), ('robotics-engineer','robot-arm'),
  ('full-stack-developer','mini-web-crawler'), ('machine-learning-engineer','ai-chatbot'),
  ('ar-vr-developer','immersive-scene'), ('data-scientist','science-lab'),
  ('game-developer','immersive-scene'), ('iot-developer','robot-arm'),
  ('stem-explorer','science-lab')
) as relation(roadmap_slug, project_slug)
join public.roadmaps as roadmap on roadmap.slug = relation.roadmap_slug
join public.projects as project on project.slug = relation.project_slug
on conflict do nothing;

insert into public.program_projects (program_id, project_id)
select program.id, project.id from (values
  ('stem-explorer','science-lab'), ('young-coder','mini-web-crawler'),
  ('robotics-builder','robot-arm'), ('ai-explorer','ai-chatbot'),
  ('future-engineer','robot-arm'), ('future-engineer','ai-chatbot'),
  ('full-stack-developer','mini-web-crawler')
) as relation(program_slug, project_slug)
join public.programs as program on program.slug = relation.program_slug
join public.projects as project on project.slug = relation.project_slug
on conflict do nothing;